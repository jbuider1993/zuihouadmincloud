package com.github.zuihou.authority.controller.auth;

import java.util.List;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.github.zuihou.authority.dto.auth.UserSaveDTO;
import com.github.zuihou.authority.dto.auth.UserUpdateDTO;
import com.github.zuihou.authority.entity.auth.Role;
import com.github.zuihou.authority.entity.auth.User;
import com.github.zuihou.authority.service.auth.RoleService;
import com.github.zuihou.authority.service.auth.UserService;
import com.github.zuihou.authority.service.core.OrgService;
import com.github.zuihou.authority.service.core.StationService;
import com.github.zuihou.base.BaseController;
import com.github.zuihou.base.R;
import com.github.zuihou.base.entity.SuperEntity;
import com.github.zuihou.common.feign.UserQuery;
import com.github.zuihou.common.model.SysOrg;
import com.github.zuihou.common.model.SysRole;
import com.github.zuihou.common.model.SysStation;
import com.github.zuihou.common.model.SysUser;
import com.github.zuihou.common.utils.context.DozerUtils;
import com.github.zuihou.database.mybatis.conditions.Wraps;
import com.github.zuihou.database.mybatis.conditions.query.LbqWrapper;
import com.github.zuihou.log.annotation.SysLog;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 * 前端控制器
 * 用户
 * </p>
 *
 * @author zuihou
 * @date 2019-07-22
 */
@Slf4j
@Validated
@RestController
@RequestMapping("/user")
@Api(value = "User", tags = "用户")
public class UserController extends BaseController {

    @Autowired
    private UserService userService;
    @Autowired
    private OrgService orgService;
    @Autowired
    private RoleService roleService;
    @Autowired
    private StationService stationService;
    @Autowired
    private DozerUtils dozer;

    /**
     * 分页查询用户
     *
     * @param data 分页查询对象
     * @return 查询结果
     */
    @ApiOperation(value = "分页查询用户", notes = "分页查询用户")
    @GetMapping("/page")
    @SysLog("分页查询用户")
    public R<IPage<User>> page(User data) {
        IPage<User> page = getPage();
        // 构建值不为null的查询条件
        LbqWrapper<User> query = Wraps.lbQ(data);
        userService.page(page, query);
        return success(page);
    }

    /**
     * 查询用户
     *
     * @param id 主键id
     * @return 查询结果
     */
    @ApiOperation(value = "查询用户", notes = "查询用户")
    @GetMapping("/{id}")
    @SysLog("查询用户")
    public R<User> get(@PathVariable Long id) {
        return success(userService.getById(id));
    }

    /**
     * 新增用户
     *
     * @param data 新增对象
     * @return 新增结果
     */
    @ApiOperation(value = "新增用户", notes = "新增用户不为空的字段")
    @PostMapping
    @SysLog("新增用户")
    public R<User> save(@RequestBody @Validated UserSaveDTO data) {
        User user = dozer.map(data, User.class);
        userService.save(user);
        return success(user);
    }

    /**
     * 修改用户
     *
     * @param data 修改对象
     * @return 修改结果
     */
    @ApiOperation(value = "修改用户", notes = "修改用户不为空的字段")
    @PutMapping
    @SysLog("修改用户")
    public R<User> update(@RequestBody @Validated(SuperEntity.Update.class) UserUpdateDTO data) {
        User user = dozer.map(data, User.class);
        userService.updateById(user);
        return success(user);
    }

    /**
     * 删除用户
     *
     * @param id 主键id
     * @return 删除结果
     */
    @ApiOperation(value = "删除用户", notes = "根据id物理删除用户")
    @DeleteMapping(value = "/{id}")
    @SysLog("删除用户")
    public R<Boolean> delete(@PathVariable Long id) {
        userService.removeById(id);
        return success(true);
    }


    /**
     * 单体查询用户
     *
     * @param id 主键id
     * @return 查询结果
     */
    @ApiOperation(value = "单体查询用户", notes = "单体查询用户")
    @PostMapping(value = "/id/{id}")
    public R<SysUser> getById(@PathVariable Long id, @RequestBody UserQuery query) {
        User user = userService.getById(id);
        if (user == null) {
            return success(null);
        }
        SysUser sysUser = dozer.map(user, SysUser.class);


        if (query.getFull() || query.getOrg()) {
            sysUser.setOrg(dozer.map(orgService.getById(user.getOrgId()), SysOrg.class));
        }
        if (query.getFull() || query.getStation()) {
            sysUser.setStation(dozer.map(stationService.getById(user.getStationId()), SysStation.class));
        }

        if (query.getFull() || query.getRoles()) {
            List<Role> list = roleService.findRoleByUserId(id);
            sysUser.setRoles(dozer.mapList(list, SysRole.class));
        }

        return success(sysUser);
    }


}
