package com.tight.coupling;

// A - MySQL, PostgreSQL
// Web Services, MongoDB

public class UserDatabase {
    public String getUserDetails() {
        // Directly access database here
        return "User Details From Database";
    }
}
