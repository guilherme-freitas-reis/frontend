import React from 'react';

export function maskCPF(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 11 + 3;
  let keyInput = e.currentTarget.value;

  keyInput = keyInput.replace(/\D/g, '');
  keyInput = keyInput.replace(/(\d{3})(\d)/, '$1.$2');
  keyInput = keyInput.replace(/(\d{3})(\d)/, '$1.$2');
  keyInput = keyInput.replace(/(\d{3})(\d{1,2})/, '$1-$2');

  e.currentTarget.value = keyInput;
  return e;
}

export function maskCNPJ(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 14 + 4;
  let keyInput = e.currentTarget.value;

  keyInput = keyInput.replace(/\D/g, '');
  keyInput = keyInput.replace(/^(\d{2})(\d)/, '$1.$2');
  keyInput = keyInput.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
  keyInput = keyInput.replace(/\.(\d{3})(\d)/, '.$1/$2');
  keyInput = keyInput.replace(/(\d{4})(\d)/, '$1-$2');

  e.currentTarget.value = keyInput;
  return e;
}

export function maskTelefone(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 11 + 4;
  let keyInput = e.currentTarget.value;

  keyInput = keyInput.replace(/\D/g, '');
  keyInput = keyInput.replace(/(\d{1})(\d)/, '($1$2)');
  keyInput = keyInput.replace(/(\d{5})(\d)/, '$1-$2');

  e.currentTarget.value = keyInput;
  return e;
}

export function maskCEP(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 8 + 1;
  let keyInput = e.currentTarget.value;

  keyInput = keyInput.replace(/\D/g, '');
  keyInput = keyInput.replace(/(^\d{5})(\d)/, '$1-$2');

  e.currentTarget.value = keyInput;
  return e;
}

export function maskNumber(e: React.FormEvent<HTMLInputElement>) {
  let keyInput = e.currentTarget.value;
  keyInput = keyInput.replace(/\D/g, '');
  e.currentTarget.value = keyInput;
  return e;
}

export function maskData(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 8 + 2;
  let keyInput = e.currentTarget.value;

  keyInput = keyInput.replace(/\D/g, '');
  keyInput = keyInput.replace(/(^\d{2})(\d)/, '$1/$2');
  keyInput = keyInput.replace(/(\d{2})(\d)/, '$1/$2');

  e.currentTarget.value = keyInput;
  return e;
}
