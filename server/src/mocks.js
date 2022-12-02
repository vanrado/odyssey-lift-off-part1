import casual from "casual";
export const mocks = {
    Query: () => ({
        // With mocks enabled, Apollo Server always returns exactly two entries for every list field.
        // To get more entries at a time, let's say 6, we'll add a Query.tracksForHome to our mocks object and return an Array of that given length like so: [...new Array(6)].
        tracksForHome: () => [...new Array(6)]
    }),
    String: () => casual.words(3),
    Int: () => casual.integer(1, 100),
    Track: () => ({
        id: () => casual.uuid,
        title: () => casual.sentence,
        thumbnail: () => 'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
        length: () => casual.integer(10, 1000),
        modulesCount: () => casual.integer(1, 50),
        author: () => ({
            id: `auth: ${casual.uuid}`,
            photo: 'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
        })
    })
};