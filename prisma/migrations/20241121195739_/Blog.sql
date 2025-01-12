create table Blog
(
    id         TEXT                                   not null
        constraint Blog_pkey
            primary key,
    createDate TIMESTAMP(3) default CURRENT_TIMESTAMP not null,
    name       TEXT                                   not null,
    content    TEXT                                   not null,
    constraint id_creator
        foreign key () references "User"("id")
);

