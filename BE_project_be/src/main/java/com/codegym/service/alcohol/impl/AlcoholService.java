package com.codegym.service.alcohol.impl;

import com.codegym.dto.IAlcoholDto;
import com.codegym.repository.alcohol.IAlcoholRepository;
import com.codegym.service.alcohol.IAlcoholService;
import com.codegym.service.alcohol.IAlcoholTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public class AlcoholService implements IAlcoholService {
    @Autowired
    private IAlcoholRepository iAlcoholRepository;
    @Override
    public Page<IAlcoholDto> findAllAlcoholAndSearch(Pageable pageable, String nameSearch) {
        return null;
//                iAlcoholRepository.findAllAlcoholAndSearch(pageable, nameSearch);
    }
}
