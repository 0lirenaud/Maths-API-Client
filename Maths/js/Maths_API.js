class Maths_API {
    static async Get(url) {
        return new Promise(resolve => {
            $.ajax({
                url: url,
                success: maths => { resolve(maths); },
                error: (xhr) => { console.log(xhr); resolve(xhr.responseJSON.error_description); }
            });
        });
    }
}