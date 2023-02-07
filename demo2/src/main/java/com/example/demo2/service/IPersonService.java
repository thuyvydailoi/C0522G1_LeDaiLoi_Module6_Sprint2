package com.example.demo2.service;

import com.example.demo2.model.Person;

import java.util.List;
import java.util.Optional;

public interface IPersonService {

    Optional<Person> findById(int id);
    List<Person> findAll();

    void savePerson(Person person);

    void deletePerson(int id);

    void updatePersonById(Person person);
}
