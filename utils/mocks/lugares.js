const lugaresMock = [
  {
    'reasons': {
      'count': 0,
      'items': [{ 'summary': 'This spot is popular', 'type': 'general', 'reasonName': 'globalInteractionReason' }]
    },
    'venue': {
      'id': '4fa3ef57e4b09d4d446e816a',
      'name': 'Emphõra',
      'location': {
        'address': 'Megacenter',
        'lat': -16.532305683522665,
        'lng': -68.08806044804456,
        'labeledLatLngs': [{ 'label': 'display', 'lat': -16.532305683522665, 'lng': -68.08806044804456 }],
        'cc': 'BO',
        'city': 'La Paz',
        'state': 'La Paz',
        'country': 'Bolivia',
        'formattedAddress': ['Megacenter', 'La Paz', 'Bolivia']
      },
      'categories': [{
        'id': '4bf58dd8d48988d10c951735',
        'name': 'Cosmetics Shop',
        'pluralName': 'Cosmetics Shops',
        'shortName': 'Cosmetics',
        'icon': { 'prefix': 'https://ss3.4sqi.net/img/categories_v2/shops/beauty_cosmetic_', 'suffix': '.png' },
        'primary': true
      }],
      'photos': { 'count': 0, 'groups': [] }
    },
    'referralId': 'e-0-4fa3ef57e4b09d4d446e816a-0'
  }, {
    'reasons': {
      'count': 0,
      'items': [{ 'summary': 'This spot is popular', 'type': 'general', 'reasonName': 'globalInteractionReason' }]
    },
    'venue': {
      'id': '53233786498ed437d0ef1cbd',
      'name': 'Amphora Beauty Shop Megacenter',
      'location': {
        'address': 'Megacenter, Av. Rafael Pabon (Irpavi)',
        'crossStreet': 'Local 6 Y 7, Nivel 1',
        'lat': -16.53287012424225,
        'lng': -68.08651757347229,
        'labeledLatLngs': [{ 'label': 'display', 'lat': -16.53287012424225, 'lng': -68.08651757347229 }],
        'cc': 'BO',
        'city': 'La Paz',
        'state': 'La Paz',
        'country': 'Bolivia',
        'formattedAddress': ['Megacenter, Av. Rafael Pabon (Irpavi) (Local 6 Y 7, Nivel 1)', 'La Paz', 'Bolivia']
      },
      'categories': [{
        'id': '52f2ab2ebcbc57f1066b8b23',
        'name': 'Perfume Shop',
        'pluralName': 'Perfume Shops',
        'shortName': 'Perfume Shop',
        'icon': { 'prefix': 'https://ss3.4sqi.net/img/categories_v2/shops/default_', 'suffix': '.png' },
        'primary': true
      }],
      'photos': { 'count': 0, 'groups': [] }
    },
    'referralId': 'e-0-53233786498ed437d0ef1cbd-1'
  }
];

function filteredLugaresMock(dir) {
  return lugaresMock.filter(lugar => venue.location.formattedAddress.includes(dir));
}

class LugarServiceMock {
  async getLugares() {
    return Promise.resolve(lugaresMock);
  }
}

module.exports = { lugaresMock, filteredLugaresMock, LugarServiceMock };