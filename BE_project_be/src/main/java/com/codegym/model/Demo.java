package com.codegym.model;

class Student {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public static void main(String[] args) {
        Student s = new Student();
        s.setName("gpcode.com");
        System.out.println(s.getName());
    }
}
