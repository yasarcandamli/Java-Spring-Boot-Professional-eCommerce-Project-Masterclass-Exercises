package com.ioc.coupling;

// A - MySQL, PostgreSQL
// Web Services, MongoDB

public class UserDatabaseProvider implements UserDataProvider {

    @Override
    public String getUserDetails() {
        // Directly access database
        return "User Details From Database";
    }
}
