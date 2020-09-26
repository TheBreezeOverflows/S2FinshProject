use s2finshprojects;

-- 表一，用户表
drop table if exists User_info;
	create table User_info(
		-- 用户id
		userID int not null PRIMARY KEY auto_increment,
		-- 用户姓名
		username varchar(20) not null ,
		-- 用户密码
		userpwd		varchar(20) not null ,
		-- 用户邮箱
		useremil	VARCHAR(20) not null,
		-- 用户号码
		usercellpn VARCHAR(20)  not null UNIQUE,
		-- 用户出生日期
		userbirth VARCHAR(20)  not null
	);




-- 表二，商品类型表
drop table if exists product_type;
	create table product_type(
		-- 商品类型表	
		productTypeID int not null PRIMARY KEY auto_increment,
		-- 商品类型名称
		productTypeName VARCHAR(20) not null

	);


-- 表三，商品信息表
drop table if exists commodity_info;
	create table commodity_info(
		
		-- 商品id
		commodityID  int not null PRIMARY KEY auto_increment,
		-- 商品类型id（外键）
		productTypeid int not null,
		-- 商品名称 
		commodityName VARCHAR(20) not null,
		-- 商品价格
		commodityPrice double  not null,
		-- 商品详细信息
		commodityMessage	varchar(80) not null,
		-- 商品图片
		commoditypicture varchar(20) not null UNIQUE,
		-- 商品库存
		commodityinventory int not null,
		-- 设置商品类型外键
		FOREIGN KEY(productTypeid) references product_type(productTypeID)
	);



-- 表四，购物信息表
DROP table if EXISTS Purchase_info;
	CREATE table Purchase_info(
	-- 购物信息ID
	purchaseID int not null PRIMARY KEY auto_increment,
	-- 用户ID（外键）
	userid int not null,
	-- 商品编号（外键）
	commodityid int not null,
	-- 商品内存表
	commodityMemory int not null,
	-- 购买数量
	count int not null,
	-- 设置用户id外键
	foreign key(userid) references User_info(userID),
	-- 设置商品编号id外键
	FOREIGN key(commodityid) references commodity_info(commodityID)
	);



-- 表五，订单记录表
drop table if  exists order_history;
	create table order_history(
		-- 订单记录id
		recordID int not null PRIMARY KEY auto_increment,
		-- 用户id(外键)
		userid int not NULL,
		foreign key(userid) references User_info(userID)
	);




-- 表六，订单明细表
DROP table if EXISTS order_details;
	create table order_details(
		-- 订单明细id
		orderID int not null PRIMARY KEY auto_increment,
		-- 订单记录id（外）
		recordid	int not null,
		-- 商品编号id（外）
		commodityid	int not null,
		-- 订单时间
		orderTime datetime DEFAULT now(),
		-- 订单数量
		orderCount int not null,
		-- 顶单单价
		orderunit double not null,
		-- 订单总价
		ordertotal double not null,
		-- 设置订单记录id外键	
		FOREIGN key(recordid) references order_history(recordID),
		-- 设置商品编号id外键
		FOREIGN key(commodityid) references commodity_info(commodityID)
	);

-- 表七，收藏
drop table if exists Collect_info;
	CREATE table Collect_info(
		-- 收藏ID 
		collectID int not null PRIMARY KEY auto_increment,
		-- 商品id（外）
		commodityid int not null,
		userid int not NULL,
		foreign key(userid) references User_info(userID),
		-- 设置商品编号id外键
		FOREIGN key(commodityid) references commodity_info(commodityID)
	);





-- 表八，技术支持
drop table if exists technical_support;
	create table technical_support(
		-- 技术支持id
		technicalid int not null PRIMARY KEY auto_increment,
		-- 技术支持事件
		incident VARCHAR(20) not null
	); 




-- 表九，手机表
drop table if exists mobile_info;
	create table mobile_info(
		-- 商品id(外)
		commodityid int not null,
		-- 商品颜色
		commoditycolor VARCHAR(20) not null,
		-- 设置商品编号id外键
		FOREIGN key(commodityid) references commodity_info(commodityID)
	
	);




-- 表十， 平板表
drop table if exists slab_info;
	create table slab_info(
		-- 商品id(外)
		commodityid int not null,
		-- 商品颜色
		commoditycolor VARCHAR(20) not null,
		-- 设置商品编号id外键
		FOREIGN key(commodityid) references commodity_info(commodityID)
	);




-- 表十一，电脑表
drop table if EXISTS computer_info;
	create table computer_info(
		-- 商品id(外)
		commodityid int not null,
		-- 商品尺寸
		commoditySize double not null,
		-- 设置商品编号id外键
		FOREIGN key(commodityid) references commodity_info(commodityID)
	);