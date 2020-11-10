const car = (name, model, year, owner, phone, image) => ({
    name,
    model,
    year,
    owner,
    phone,
    image
})
const log = (text, type, date = new Date()) => ({
    text,
    type,
    date
})

const cars = [
    car('Mersedes', 'Benz', 2019, 'Максат', '+7 775 45 85 966', 'img/mers.jpg'),
    car('Bmw', 'i8', 2020, 'Адилет', '+7 705 50 85 886', 'img/bmw.jpg'),
    car('Audi', 'a4', 2018, 'Нурлан', '+7 708 85 85 105', 'img/audi.jpg')
]

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectCar(index) {
            this.car = cars[index],
                this.selectedCarIndex = index;
        },
        newOrder() {
            this.modalVisibility = false,
                this.logs.push(
                    log(`Заказ принята: ${this.car.name} - ${this.car.model}`, 'Ok')
                )
        },
        cancelOrder() {
            this.modalVisibility = false,
                this.logs.push(
                    log(`Заказ отмена: ${this.car.name} - ${this.car.model}`, 'Cancel')
                )
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Убрать номер' : 'Показать номер'
        },
        filteredCars() {
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            })
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString()
        }
    }

})