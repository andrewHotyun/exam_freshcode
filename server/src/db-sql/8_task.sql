CREATE TABLE catalog(
    id serial PRIMARY KEY,
    user_id int NOT NULL REFERENCES users(id),
    catalog_name varchar(100) NOT NULL CHECK (catalog_name != ''),
    chats int REFERENCES conversation(id)
);

CREATE TABLE conversation(
    id serial PRIMARY KEY,
    participants int NOT NULL REFERENCES users(id),
    blacklist BOOLEAN DEFAULT false,
    favorite_list BOOLEAN DEFAULT false,
    created_at timestamp DEFAULT current_timestamp,
    updated_at timestamp DEFAULT current_timestamp
);

CREATE TABLE message(
    id serial PRIMARY KEY,
    sender int NOT NULL REFERENCES users(id),
    body varchar(255) NOT NULL CHECK (body != ''),
    created_at timestamp DEFAULT current_timestamp,
    updated_at timestamp DEFAULT current_timestamp
);

CREATE TABLE conversation_to_message(
    conversation_id int REFERENCES conversation(id),
    message_id int REFERENCES message(id),
    PRIMARY KEY(message_id, conversation_id)
);

CREATE TABLE conversation_to_users(
    conversation_id int REFERENCES conversation(id),
    user_id int REFERENCES users(id),
    PRIMARY KEY(conversation_id, user_id)
);

CREATE TABLE message_to_users(
    message_id int REFERENCES message(id),
    user_id int REFERENCES users(id),
    PRIMARY KEY(message_id, user_id)
);


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    display_name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    avatar VARCHAR(255) NOT NULL DEFAULT 'anon.png',
    role VARCHAR(255) NOT NULL CHECK (role IN ('customer', 'creator')),
    balance DECIMAL(10, 2) NOT NULL DEFAULT 0 CHECK (balance >= 0),
    access_token TEXT,
    rating FLOAT NOT NULL DEFAULT 0
);