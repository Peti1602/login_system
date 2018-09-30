import connection


@connection.connection_handler
def sql_add_new_user(cursor, email, hash, firstname, lastname):
    cursor.execute("""
                    INSERT INTO users (email, hash, firstname, lastname)
                    VALUES (%(email)s, %(hash)s, %(firstname)s, %(lastname)s);
                    """, {'email': email, 'hash': hash, 'firstname': firstname, 'lastname': lastname})


@connection.connection_handler
def sql_select_user_by_email(cursor, email):
    cursor.execute("""
                    SELECT id 
                    FROM users 
                    WHERE email = %(email)s;
                    """, {'email': email})
    display = cursor.fetchall()
    return display
