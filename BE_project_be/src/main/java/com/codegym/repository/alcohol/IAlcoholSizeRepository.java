package com.codegym.repository.alcohol;

import com.codegym.model.alcohol.AlcoholSize;
import com.codegym.model.alcohol.AlcoholType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IAlcoholSizeRepository extends JpaRepository<AlcoholSize, Integer> {
    @Query(value = "select id, name, is_delete" +
            " from alcohol_size  where is_delete = 0", nativeQuery = true)
    List<AlcoholSize> findAllAlcoholSize();
}
