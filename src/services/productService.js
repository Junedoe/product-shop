export const productJson = [
    {
        id: 1,
        label: 'Maverick Chronograph',
        'short-description': 'Blue, 43 mm',
        price: '100 chf',
        sale: false,
        'product-photo': '/images/watch.png'
    },
    {
        id: 2,
        label: 'Swiss unlimited energy eau de cologne',
        'short-description': '150 ml',
        price: '37 chf',
        sale: true,
        'product-photo': '/images/cologne.png'
    },
    {
        id: 3,
        label: 'Translucent cap II',
        'short-description': 'Navy, one',
        price: '89 chf',
        sale: false,
        'product-photo': '/images/cap.png'
    }
];
export function getProductJsonItem(id) {
    return productJson.filter(item => item.id === id);
}
export function getProductJson() {
    return productJson;
}
