package com.github.zuihou.admin.entity.authority.po;

import com.github.zuihou.base.entity.BaseEntity;
import java.io.Serializable;
import java.util.Date;

import lombok.Data;

@Data
public class RoleResource extends BaseEntity<Long> implements Serializable {
    private Long id;

    /**
     * 权限Id 角色id(a_role)
     *
     * @mbggenerated
     */
    private Long roleId;

    /**
     * 资源id a_resources表
     *
     * @mbggenerated
     */
    private Long resourceId;

    private static final long serialVersionUID = 1L;
}