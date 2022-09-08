/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.Reto3.Reto3.service;

import com.Reto3.Reto3.entity.Reservation;
import com.Reto3.Reto3.repository.ReservationRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author eduar
 */
@Service
public class ReservationService {

    @Autowired
    private ReservationRepository repository;

    public List<Reservation> getReservations() {
        return repository.findAll();
    }

    public Reservation getReservationById(int id) {
        return repository.findById(id).orElse(null);
    }

    public Reservation saveReservation(Reservation reservation) {
        return repository.save(reservation);
    }

}
