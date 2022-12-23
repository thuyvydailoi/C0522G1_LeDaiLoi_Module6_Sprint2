package com.codegym.service.alcohol;

import com.codegym.dto.IAlcoholDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface IAlcoholService {
    Page<IAlcoholDto> findAllAlcoholAndSearch( String nameSearch, Pageable pageable);

    Page<IAlcoholDto> findAllAlcoholByTypeAndSearch( String nameSearch, Pageable pageable, int type);

//    Page<IAlcoholDto> findAllBaseAndSearch( String nameSearch, Pageable pageable);
//
//    Page<IAlcoholDto> findAllWineAndSearch( String nameSearch, Pageable pageable);

    Optional<IAlcoholDto> findByIdAlcohol(Integer id);
}
