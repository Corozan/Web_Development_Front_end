$(document).ready(function () {

    // FETCHING DATA FROM JSON FILE
    $.getJSON("data.json",
            function (data) {
        var student = '';

        // ITERATING THROUGH OBJECTS
        $.each(data, function (key, value) {

            //CONSTRUCTION OF ROWS HAVING
            // DATA FROM JSON OBJECT
            student += '<tr>';
            student += '<td>' +
                value.Name + '</td>';

            student += '<td>' +
                value.Age + '</td>';

            student += '<td>' +
                value.Hobby + '</td>';

            student += '</tr>';
        });
        
        //INSERTING ROWS INTO TABLE
        $('#table').append(student);
    });
});