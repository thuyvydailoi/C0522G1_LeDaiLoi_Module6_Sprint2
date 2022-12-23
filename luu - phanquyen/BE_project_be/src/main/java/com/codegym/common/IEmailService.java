package com.codegym.common;

public interface IEmailService {
    boolean sendEmail(String receiptEmail, String link);
}
