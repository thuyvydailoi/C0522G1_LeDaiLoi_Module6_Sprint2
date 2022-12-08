package com.codegym.repository.alcohol;

import com.codegym.model.alcohol.Alcohol;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IAlcoholRepository extends JpaRepository<Alcohol, Integer> {
}
