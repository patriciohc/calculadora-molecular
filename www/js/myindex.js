/*
 * myindex.js
 * This file is part of Calculadora Molecular
 *
 * Copyright (C) 2015 J.Patricio Hijuitl
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, see <http://www.gnu.org/licenses/>.
 */


var operacion = Array(20);
var index_operacion = 0;
var shows;

function clear()
{
    for (var i = 0; i < index_operacion; i++) {
        espacio = shows[i];
        espacio.getElementsByTagName('span')[0].innerHTML = "";
    }
    index_operacion = 0;
}

function show(elemento)
{
    espacio = shows[index_operacion];
    if (elemento == 'DIV') {
        espacio.getElementsByTagName('span')[0].innerHTML =  "/";
    } else if (elemento == 'MULT') {
        espacio.getElementsByTagName('span')[0].innerHTML =  "*";
    } else {
        espacio.getElementsByTagName('span')[0].innerHTML =  elemento;
    }
}

function del()
{
    espacio = shows[--index_operacion];
    espacio.getElementsByTagName('span')[0].innerHTML = "";
}
    

function agregar_elemento(name_elemento)
{
    show(name_elemento);
    if (name_elemento == '(') {
        name_elemento = 'OPEN';
    } else if (name_elemento == ')') {
        name_elemento = 'CLOSE'
    }
    var data_this_element = data_elements[name_elemento];
    operacion[index_operacion++] = data_this_element;
}


function sumar_elementos(array_elementos, len)
{
    var i;
    var sum = 0;
    for (i = 0; i < len; i++) {
        sum += array_elementos[i];
    }
    return sum;
}

function get_value_numeric(ini,end)
{
    var tmp = 0;
    var digito;
    var suma = 0;
    var len = end - ini;
    for (var i = 0; i <= len; i++) {
        digito = operacion[end-i].valor;
        tmp = Math.pow(10,i);
        suma += digito * tmp;
    }
    return suma;
}

function suma_interna(init, end)
{
    var elemento;
    var acumulador = Array(10);
    var index_acumulador = 0;
    for (var i = init; i < end; i++) {
        elemento = operacion[i];
        if (elemento.tipo == ELEMENTO) {
            acumulador[index_acumulador++] = elemento.PA;    
        } else if (elemento.tipo == NUMERO) {
            elemento_mult = acumulador[index_acumulador-1];
            acumulador[index_acumulador - 1] = elemento_mult * elemento.valor;
        }        
    }
    return sumar_elementos(acumulador, index_acumulador)
}

function calcular()
{
    var elemento;
    var acumulador = Array(10);
    var index_acumulador = 0;
    var numero = 1;
    var operando1 = 0;
    var operando2 = 0;
    var operador = '';
    for (var i = 0; i < index_operacion; i++) {
        elemento = operacion[i];
        switch (elemento.tipo) {
        case ELEMENTO:
            acumulador[index_acumulador++] = elemento.PA;
            break;
        case NUMERO:
            var ini = i;
            while (++i < index_operacion && operacion[i].tipo == NUMERO);
            i -= 1;
            numero = get_value_numeric(ini,i);
            if (index_acumulador != 0) {
                elemento_mult = acumulador[index_acumulador - 1];
                acumulador[index_acumulador - 1] = elemento_mult * numero;
                numero = 1;
            }
            break;
        case OPERADOR:
            operador = elemento.valor;
            operando1 = sumar_elementos(acumulador, index_acumulador);
            operando1 *= numero;
            index_acumulador = 0;
            numero = 1;
            break;
        case OPEN:
            var ini = i;
            while (operacion[++i].tipo != CLOSE);
            var end = i;
            acumulador[index_acumulador++] = suma_interna(ini,end);
            break;
        default:
            alert("error de sintaxis");
            return;
        }
    }
    operando2 = sumar_elementos(acumulador, index_acumulador);
    operando2 *= numero;
    switch (operador) {
    case '/':
        if (operando2 == 0) alert("division entre 0!");
        else resultado = operando1 / operando2;
        break;
    case '*':
        resultado = operando1 * operando2;
        break;    
    default:
        resultado = operando1 + operando2;        
    }
    alert(resultado);
    /*clear();*/
    /*index_operacion = 0;*/
    return resultado;
}

function add_event(elementos)
{
    var v = 0;
    var elemento;
    var name_elemento;
    var charts;
    var f;

    for (var i = 0; i<elementos.length;i++) {
        elemento = elementos[i];
        name_elemento = elemento.getElementsByTagName('span')[0].childNodes[0].nodeValue;
        f = "agregar_elemento('"+name_elemento+"');";
        elemento.setAttribute('onclick',f);
        }
}

function ele()
{
    var elementos;
    var elemento;
    var bt_igual  = document.getElementById('igual');
    var bt_delete = document.getElementById('delete');
    var bt_clear = document.getElementById('clear');
    
    bt_igual.addEventListener('click', calcular, false);
    bt_delete.addEventListener('click', del, false);
    bt_clear.addEventListener('click', clear, false);
    
    elementos = document.getElementsByClassName('elemento');
    add_event(elementos);
    elementos = document.getElementsByClassName('numero');
    add_event(elementos);
    elementos = document.getElementsByClassName('operador');
    add_event(elementos);
    shows = document.getElementsByClassName('show'); /* espacios para mostrar resultados */
}

window.onload = ele;
