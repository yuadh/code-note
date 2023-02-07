---
title: 20maven模块化
date: 2022-10-17 11:26:36
permalink: /pages/5bcc4d/
categories:
  - 框架和软件
  - Spring
tags:
  - 
---
## maven模块化

将原始模块按照功能拆分若干个子模块，方便模块间的互相调用，接口共享

## 依赖管理

依赖管理指当前项目运行所需的 jar ，一个项目可以设置多个依赖

### 依赖传递

依赖具有传递性

- 直接依赖：在当前项目中通过依赖配置建立的依赖关系
- 间接依赖：被资源的资源如果依赖其他资源，当前项目间接依赖其他资源
- 特殊优先：当同级配置了相同资源的不同版本，后配置的覆盖先配置的

### 可选依赖

```xml
<dependency>
    <groupId>com.itheima</groupId>
    <artifactId>maven_03_pojo</artifactId>
    <version>1.0-SNAPSHOT</version>
    <!--可选依赖是隐藏当前工程所依赖的资源，隐藏后对应资源将不具有依赖传递性-->
    <optional>false</optional>
</dependency>
```

隐藏相关依赖，关闭透明性

### 排除依赖

```xml
<dependency>
    <groupId>com.itheima</groupId>
    <artifactId>maven_04_dao</artifactId>
    <version>1.0-SNAPSHOT</version>
    <!--排除依赖是隐藏当前资源对应的依赖关系-->
    <exclusions>
        <exclusion>
            <groupId>log4j</groupId>
            <artifactId>log4j</artifactId>
        </exclusion>
        <exclusion>
            <groupId>org.mybatis</groupId>
            <artifactId>mybatis</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```

排除相关依赖，直接删除

## 聚合和继承

聚合：将多个模块组织成一个整体，同时进行项目构建的过程称为聚合

**聚合工程开发**

1. 创建Maven模块，设置打包类型

   ```xml
   <packaging>pom</packaging>
   ```

2. 设置当前聚合工程所包含的子模块

   ```xml
   <modules>
       <module>../maven_ssm</module>
       <module>../maven_pojo</module>
       <module>../maven_dao</module>
   </modules>
   ```

注意事项

- 聚合工程中所包含的模块在进行构建时会根据模块间的依赖关系设置构建顺序，与聚合工程中模块的配置书写位置无关。

- 参与聚合的工程无法向上感知是否参与聚合，只能向下配置哪些模块参与本工程的聚合。

**继承**

继承描述的是两个工程间的关系，与java中的继承相似，子工程可以继承父工程中的配置信息，常见于依赖关系的继承

- 简化配置
- 减少版本冲突

1. 父工程 `pom` 文件配置依赖关系，子工程会继承沿用

   ```xml
   <dependencies>
       <dependency>
           <groupId>org.springframework</groupId>
           <artifactId>spring-webmvc</artifactId>
           <version>5.2.10.RELEASE</version>
       </dependency>
       ……
   </dependencies>
   <!--提供给子工程的依赖-->
   <dependencyManagement>
       <dependencies>
           <dependency>
               <groupId>com.alibaba</groupId>
               <artifactId>druid</artifactId>
               <version>1.1.16</version>
           </dependency>
           ……
       </dependencies>
   </dependencyManagement>
   ```

2. 子工程配置依赖关系

   ```xml
   
   <!--定义该工程的父工程-->
   <parent>
       <groupId>com.itheima</groupId>
       <artifactId>maven_parent</artifactId>
       <version>1.0-SNAPSHOT</version>
       <!--填写父工程的pom文件，根据实际情况填写-->
       <relativePath>../maven_parent/pom.xml</relativePath>
   </parent>
   ```

3. 子工程使用父工程的坐标

   ```xml
   <dependencies>
       <dependency>
           <groupId>com.alibaba</groupId>
           <artifactId>druid</artifactId>
       </dependency>
   </dependencies>
   ```

注意事项

- 子工程中使用父工程中的可选依赖时，仅需要提供群组id和项目id，无需提供版本，版本由父工程统一提供，避免版本冲突
- 子工程中还可以定义父工程中没有定义的依赖关系

## maven属性

**定义属性**

```xml
<properties>
    <maven.compiler.source>8</maven.compiler.source>
    <maven.compiler.target>8</maven.compiler.target>
    <spring.version>5.2.10.RELEASE</spring.version>
    <junit.version>4.12</junit.version>
</properties>
```

**引用属性**

```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>${spring.version}</version>
</dependency>
```

maven相关属性

![1665987604308.png](http://img.yuadh.com/imgs/2022/10/17/1665987604308.png)

**工程版本**

- SNAPSHOT（快照版本）
  - 项目开发过程中临时输出的版本，称为快照版本
  - 快照版本会随着开发的进展不断更新
- RELEASE（发布版本）
  - 项目开发到进入阶段里程碑后，向团队外部发布较为稳定的版本，这种版本所对应的构件文件是稳定的
  - 即便进行功能的后续开发，也不会改变当前发布版本内容，这种版本称为发布版本

## 多环境配置

定义多环境

```xml
<!--定义多环境-->
<profiles>
    <!--定义具体的环境：生产环境-->
    <profile>
        <!--定义环境对应的唯一名称-->
        <id>env_dep</id>
        <!--定义环境中专用的属性值-->
        <properties>
            <jdbc.url>jdbc:mysql://127.0.0.1:3306/ssm_db</jdbc.url>
        </properties>
        <!--设置默认启动-->
        <activation>
            <activeByDefault>true</activeByDefault>
        </activation>
    </profile>
    <!--定义具体的环境：开发环境-->
    <profile>
        <id>env_pro</id>
        ……
    </profile>
</profiles>
```

使用多环境

```shell
【命令】：
mvn 指令 –P 环境定义id

【范例】：
mvn install –P pro_env
```























