import { profile } from "console";
import "core-js/stable";
import "regenerator-runtime/runtime";
import CallApi from "../js/CallApi.js"
import Header from '../js/Header'

// let root = document.querySelector("#root")

function init() {
   Header()
   CallApi()
}

document.addEventListener("DOMContentLoaded", init)