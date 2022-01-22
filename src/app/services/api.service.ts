import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {
    _baseUrl = 'https://list.boendermaker.de/api/';

    constructor(private http: HttpClient) { }

    _getHeaders() {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            })
        };
        return httpOptions;
    }

    getCart(payload) {
        return this.http.post(`${this._baseUrl}?action=getcart`, JSON.stringify(payload), this._getHeaders());
    }

    getCartItem(payload) {
        return this.http.post(`${this._baseUrl}?action=getcartitem`, JSON.stringify(payload), this._getHeaders());
    }

    getAllCarts() {
        return this.http.get(`${this._baseUrl}?action=getallcarts`);
    }

    getAllCartItems(payload) {
        return this.http.post(`${this._baseUrl}?action=getallcartitems`, JSON.stringify(payload), this._getHeaders());
    }

    getCartItemInfo(payload) {
        return this.http.post(`${this._baseUrl}?action=getcartiteminfo`, JSON.stringify(payload), this._getHeaders());
    }

    getCartItemImage(payload) {
        return this.http.post(`${this._baseUrl}?action=getcartitemimage`, JSON.stringify(payload), this._getHeaders());
    }

    toggleCart(payload) {
        return this.http.post(`${this._baseUrl}?action=togglecart`, JSON.stringify(payload), this._getHeaders());
    }

    toggleCartItem(payload) {
        return this.http.post(`${this._baseUrl}?action=togglecartitem`, JSON.stringify(payload), this._getHeaders());
    }

    createCart(payload) {
        return this.http.post(`${this._baseUrl}?action=createcart`, JSON.stringify(payload), this._getHeaders());
    }

    createCartItem(payload) {
        return this.http.post(`${this._baseUrl}?action=createcartitem`, JSON.stringify(payload), this._getHeaders());
    }

    updateCart(payload) {
        return this.http.post(`${this._baseUrl}?action=updatecart`, JSON.stringify(payload), this._getHeaders());
    }

    updateCartItem(payload) {
        return this.http.post(`${this._baseUrl}?action=updatecartitem`, JSON.stringify(payload), this._getHeaders());
    }

    copyCart(payload) {
        return this.http.post(`${this._baseUrl}?action=copycart`, JSON.stringify(payload), this._getHeaders());
    }

    deleteCart(payload) {
        return this.http.post(`${this._baseUrl}?action=deletecart`, JSON.stringify(payload), this._getHeaders());
    }

    deleteCartItem(payload) {
        return this.http.post(`${this._baseUrl}?action=deletecartitem`, JSON.stringify(payload), this._getHeaders());
    }

}