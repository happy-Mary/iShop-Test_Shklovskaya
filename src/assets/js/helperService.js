import $ from 'jquery';

export function  makeAjaxCall(url, methodType, callback) {
    return $.ajax({
        url : url,
        method : methodType,
        dataType : "json"
    })
}