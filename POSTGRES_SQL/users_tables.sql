create table users (
    -- id char(5) constraint pk_users primary key,
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    profile_image varchar(200) default '/profile_images/default.png',
    email varchar(40) UNIQUE not null,
    role varchar(10) not null default 'user',
    password char(60) not null,
    -- account_status varchar(20) not null default 'pending',
    ----//------PERSONAL DATA
    name varchar(40),
    surname varchar(40),
    birthday date,
    phone varchar(20),
    -- //------ADDRESS
    city varchar(40),
    street varchar(40),
    house_number varchar(40),
    postal_code integer,
    -- // (createdAt,updatedAt) those fields are create automaticly with sequeelize
    created_at timestamp not null,
    updated_at timestamp not null,
    deleted_at timestamp
);
-- create table users_addresses (
--     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
--     user_id UUID not null references users(id) on delete cascade,
--     city varchar(40),
--     street varchar(40),
--     house_number varchar(40),
--     postal_code integer,
--     created_at timestamp not null,
--     updated_at timestamp not null,
--     deleted_at timestamp
-- );