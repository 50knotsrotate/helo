drop table if exists test;

create table test(
    id serial primary key,
    test text
);
insert into test(test)
values('This is test data');