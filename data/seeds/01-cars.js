// STRETCH
const cars = [
    {
        vin: '11111111111111',
        make: 'toyota',
        model: 'prius',
        mileage: 200000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '11111111111112',
        make: 'toyota',
        model: 'camry',
        mileage: 150000,
        title: 'null',
        transmission: 'manual',
    },    
    {
        vin: '11111111111341',
        make: 'ford',
        model: 'ranger',
        mileage: 200000,
    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}