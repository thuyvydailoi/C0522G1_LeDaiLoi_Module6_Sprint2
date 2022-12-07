package com.codegym.service.alcohol;

import com.codegym.dto.IAlcoholDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IAlcoholService {
    Page<IAlcoholDto> findAllAlcoholAndSearch(Pageable pageable, String nameSearch);

}
