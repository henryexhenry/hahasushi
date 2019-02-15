const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

const dishSchema = new Schema({
    name_eng: {
        type: String,
        required: true,
        unique: true
    },
    name_cn: {
        type: String,
        required: true,
        unique: true
    },
    name_jp: {
        type: String,
        default:""
    },    
    description: {
        //ingredients
        type: String
    },
    image: {
        type: String,
        required:false
    },
    image_size: {
        type: String,
        default:""
    },
    category: {
        //寿司 军舰 刺身 燒物 炸物 和食 卷 沙律珍味 丼 酒水甜品
        type: String,
        required: true
    },
    label: {
        //人气 推介 限定 素食 辛辣 火炙
        type: String,
        default: ''
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    },
    unit:{
        type: String,
        default: ''
    },
    featured: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true,
    usePushEach: true
});

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;