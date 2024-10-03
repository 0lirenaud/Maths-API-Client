var nbErreurTest = 0;
var totalTests = 31;
const API_URL = '/api/maths'
var url;
Init_UI();

function Init_UI() {
    $('#goTest').on("click", async function () {
        url = $('input[type="text"]').val() + API_URL;
    });
    $('#goTest').on('click', function() {
        renderMaths();
    });
}

async function renderMaths() {
    nbErreurTest = 0
    $('#TestsContainer').html("<legend>Tests</legend>")
    $('#VerdictContainer').html("<legend>Verdict</legend>")
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?op= &x=-111&y=-244')))
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?op=-&x=1&y=abc')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?n=a&op=p')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?op=-&x=111&y=244')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?op=*&x=11.56&y=244.12345')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?op=/&x=99&y=11.06')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?op=/&x=99&y=0')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?op=/&x=0&y=0')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?op=%&x=5&y=5')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?op=%&x=100&y=13')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?op=%&x=100&y=0')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?op=%&x=0&y=0')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?n=0&op=!')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?n=0&op=p')))
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?n=1&op=p')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?n=2&op=p')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?n=5&op=p')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?n=6&op=p')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?n=6.5&op=p')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?n=113&op=p')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?n=114&op=p')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?n=1&op=np')))
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?n=30&op=np')))  
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?X=111&op= &Y=244')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?Y=244&op= &x=111')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?op= &x=111&y=244&z=0')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?n=5&op=!&z=0')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?n=5.5&op=!')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?z=0')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?n=-5&op=!')))   
    $('#TestsContainer').append(testRow(await Maths_API.Get(url + '?x=null')))
    
    $('#VerdictContainer').append(((nbErreurTest == 0) ? '<div> Bravo !!! Aucun problème. </div>' 
                                                            : `<div> Il y a actuellement ${nbErreurTest} erreurs. </div>`))
}

function testRow(operation) {
    let verdict = 'OK'
    if(operation.hasOwnProperty('error')){
        nbErreurTest++;
        verdict = 'ERREUR';
    }
    return `<div> ${verdict} --> ${JSON.stringify(operation)}</div>`
}