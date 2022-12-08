package com.codegym.repository.alcohol;

import com.codegym.model.alcohol.AlcoholType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IAlcoholTypeRepository extends JpaRepository<AlcoholType, Integer> {
}
