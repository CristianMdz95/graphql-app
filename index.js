import {ApolloServer, gql} from 'apollo-server'

const persons = [
    {
        name: "Cristian",
        phone: "239942",
        street: "Santiago",
        city: "Manzanillo",
        id: "0001"
    },
    {
        name: "Luis",
        phone: "23609892",
        street: "B5",
        city: "Manzanillo",
        id: "0002"
    },
    {
        name: "Raul",
        phone: "990123",
        street: "El Valle",
        city: "Manzanillo",
        id: "0003"
    }
];


const typeDefinitions = gql`

    type Person {
        name: String!
        phone: String
        street: String
        city: String!
        id: ID!
    }

    type Query{
        personCount: Int!
        allPerson: [Person]!
    }

` 

const resolvers = {
    Query: {
        personCount: () => persons.length,
        allPerson: () => persons
    }
}

const server = new ApolloServer({
    typeDefs: typeDefinitions,
    resolvers
})

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`);
})