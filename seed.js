const db = require('./server/db');
const User = require('./server/models/user')


const fakeUsers = [
  { firstName: 'Ericha', lastName: 'Stede', street: '7176 Cardinal Pass', city: 'Columbus', state: 'GA' },
  { firstName: 'Lindsy', lastName: 'Robbs', street: '889 Helena Junction', city: 'Athens', state: 'GA' },
  { firstName: 'Stephanie', lastName: 'Wellen', street: '0094 Leroy Drive', city: 'Syracuse', state: 'NY' },
  { firstName: 'Armin', lastName: 'Bedle', street: '5 Holy Cross Terrace', city: 'Huntsville', state: 'TX' },
  { firstName: 'Lane', lastName: 'Irnys', street: '13075 Sutteridge Terrace', city: 'Hamilton', state: 'OH' },
  { firstName: 'Tarra', lastName: 'Mitkcov', street: '6 Maywood Lane', city: 'Little Rock', state: 'AR' },
  { firstName: 'Stephie', lastName: 'Gheorghie', street: '00 Cody Point', city: 'Des Moines', state: 'IA' },
  { firstName: 'Jeannine', lastName: 'Lorimer', street: '7072 Rigney Terrace', city: 'Toledo', state: 'OH' },
  { firstName: 'Jacquenette', lastName: 'Tooley', street: '44486 Canary Road', city: 'Orange', state: 'CA' },
  { firstName: 'Sherye', lastName: 'Reisenstein', street: '7 Summerview Pass', city: 'Houston', state: 'TX' },
  { firstName: 'Carolan', lastName: 'Wennington', street: '7868 Hovde Alley', city: 'Portland', state: 'OR' },
  { firstName: 'Sinclare', lastName: 'Gockeler', street: '8 Pankratz Junction', city: 'Charlotte', state: 'NC' },
  { firstName: 'Maybelle', lastName: 'Dabner', street: '3733 Talmadge Trail', city: 'Fort Worth', state: 'TX' },
  { firstName: 'Nicky', lastName: 'Goadbie', street: '17768 Rusk Hill', city: 'Huntington', state: 'WV' },
  { firstName: 'Dotti', lastName: "O'Shaughnessy", street: '34836 Village Pass', city: 'Minneapolis', state: 'MN' }];

const createUser = (model, user) => model.create(user)

db.sync({ force: true })
  .then(() => {
    return Promise.all(
      fakeUsers.map(person => createUser(User, person))
    )
  })
  .then(() => {
    console.log('Database seeded and ready to review');
  })
  .catch(err => console.log(err))
