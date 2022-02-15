// STRETCH
const cars = [
    {
        vin: 'JN8AZ1MU7AW004224',
        make: 'toyota',
        model: 'prius',
        mileage: 200000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '4T1BE32K85U528911',
        make: 'toyota',
        model: 'camry',
        mileage: 150000,
        title: 'null',
        transmission: 'manual',
    },    
    {
        vin: 'SCA664S5XAUX48670',
        make: 'ford',
        model: 'ranger',
        mileage: 200000,
    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}