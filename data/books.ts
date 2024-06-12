const books = [
    {
        title: 'P.S. Never in a Million Years',
        description: 'Labore voluptate quidem sint voluptate vero explicabo illo necessitatibus. Laudantium molestiae minima rerum fuga tenetur sint consequatur autem.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/27.jpg',
        price: '$664.55 – $906.29',
        author: 'Marcella Bennett',
        sku: 'SYNER9529',
        categories: [
            'Action & Adventure', 'Activity Books', 'Arts & Literature', 'Cultural'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '5'
    },
    {
        title: 'A Crown of Petals and Ice',
        description: 'Cum ad et sint ut neque molestias. Illo possimus eos quas alias. Recusandae omnis fugiat sequi. Nesciunt rem perferendis consectetur rerum dolores.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/28.jpg',
        price: '$95.91',
        author: 'Karla Newman',
        sku: 'B85927643',
        categories: [
            'Action & Adventure', 'Activity Books', 'Cultural'
        ],
        tags: ['Books', 'Fiction', 'Romance - Contemporary'],
        availableAmount: '15'
    },
    {
        title: 'House of Sky and Breath',
        description: 'Quis est iste et aliquam similique facere. Corrupti et et laborum ab. Voluptatem ea possimus quaerat sit laborum sed non.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/31.jpg',
        price: '$72.99',
        author: ' Ernesto Wade',
        sku: 'GORGE231',
        categories: [
            'Action & Adventure', 'Activity Books', 'Cultural'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '30'
    },
    {
        title: 'The Story of Success',
        description: 'Autem natus sed vero accusamus officiis cumque. Est nobis nihil cumque omnis iusto quia. Est quia qui necessitatibus quo ut.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/34.jpg',
        price: '$50.89',
        author: 'Arthur Gonzalez',
        sku: 'B3847593',
        categories: [
            'Action & Adventure', 'Activity Books', 'Anthologies', 'Cultural'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '27'
    },
    {
        title: 'Kemp: Warriors in the Snow',
        description: 'Qui a doloremque ad est corporis possimus nulla. Vero at quo facere et quis quos quis. Sed est velit ut quo.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/1.jpg',
        price: '$148.00',
        author: 'Randal Adkins',
        sku: '76360237',
        categories: [
            'Cultural', 'Genre Fiction'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '41'
    },
    {
        title: 'The Girlfriend Arrangement',
        description: 'Et quo dolorem culpa id quos consequatur. Doloremque veniam commodi cumque. Excepturi qui quae ad ipsam quae optio sapiente.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/3.jpg',
        price: '$761.67',
        author: 'Misty Figueroa',
        sku: '03081341',
        categories: [
            'Genre Fiction'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '0'
    },
    {
        title: 'Vampire Sire 2',
        description: 'Consequatur consequuntur doloremque facere voluptatem explicabo et molestiae. Qui esse consequuntur magni.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/20.jpg',
        price: '$642.94',
        author: 'Rex Rios',
        sku: '19468112',
        categories: [
            'Cultural', 'Genre Fiction'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '0'
    },
    {
        title: 'Life Flight',
        description: 'Atque modi laborum saepe ipsa. Aspernatur voluptatem repellendus iusto magnam doloremque. Perferendis et sed aut et fugit deserunt sed. Recusandae ratione aut vero qui.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/25.jpg',
        price: '$115.72',
        author: 'Misty Figueroa',
        sku: '15836496',
        categories: [
            'Action & Adventure', 'Activity Books', 'Arts & Literature', 'Cultural'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '2'
    },
    {
        title: 'Heavenly Bodies',
        description: 'Nemo et dolorem vel voluptate voluptatem corrupti. Sapiente aut qui id rem. Rerum quaerat voluptate eaque deserunt autem aut. Doloribus eaque vero quia non recusandae.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/26.jpg',
        price: '$53.00',
        author: 'Karla Newman',
        sku: '11495857',
        categories: [
            'Action & Adventure', 'Activity Books', 'Anthologies', 'Cultural'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '5'
    },
    {
        title: 'A Crown of Petals and Ice',
        description: 'Cum ad et sint ut neque molestias. Illo possimus eos quas alias. Recusandae omnis fugiat sequi. Nesciunt rem perferendis consectetur rerum dolores.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/28.jpg',
        price: '$95.91',
        author: 'Karla Newman',
        sku: 'B85927643',
        categories: [
            'Action & Adventure', 'Activity Books', 'Cultural'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '4'
    },
    {
        title: 'Heavenly Bodies',
        description: 'Nemo et dolorem vel voluptate voluptatem corrupti. Sapiente aut qui id rem. Rerum quaerat voluptate eaque deserunt autem aut. Doloribus eaque vero quia non recusandae.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/26.jpg',
        price: '$53.00',
        author: 'Karla Newman',
        sku: '11495857',
        categories: [
            'Action & Adventure', 'Activity Books', 'Anthologies', 'Cultural'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '5'
    },
    {
        title: 'A Crown of Petals and Ice',
        description: 'Cum ad et sint ut neque molestias. Illo possimus eos quas alias. Recusandae omnis fugiat sequi. Nesciunt rem perferendis consectetur rerum dolores.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/28.jpg',
        price: '$95.91',
        author: 'Karla Newman',
        sku: 'B85927643',
        categories: [
            'Action & Adventure', 'Activity Books', 'Cultural'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '4'
    },
    {
        title: 'Echoes of the Past',
        description: 'Eum rerum et et ullam laboriosam. Et odio et voluptatem debitis ut. Ab ipsa quia molestiae.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/29.jpg',
        price: '$47.00',
        author: 'John Smith',
        sku: 'A12345678',
        categories: [
            'Historical', 'Biographies', 'Classics'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '3'
    },
    {
        title: 'Whispers of the Wind',
        description: 'Aut vero reiciendis et et. Molestias vel distinctio qui nisi aut fugit. Quia maxime enim qui et.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/30.jpg',
        price: '$65.99',
        author: 'Emily Stone',
        sku: 'B98765432',
        categories: [
            'Arts & Photography', 'Contemporary', 'Genre Fiction'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '2'
    },
    {
        title: 'Shadows and Light',
        description: 'Ipsam atque nulla rerum alias enim. Exercitationem nisi omnis velit amet alias quos. Quia totam voluptas.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/31.jpg',
        price: '$39.50',
        author: 'Laura Carter',
        sku: 'C34567890',
        categories: [
            'Children\'s Books', 'Classics', 'Education & Reference'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '6'
    },
    {
        title: 'Mysteries of the Deep',
        description: 'Aut ut eaque soluta sint sit est. Minima nesciunt quia omnis autem dolorem.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/32.jpg',
        price: '$78.25',
        author: 'Michael Brown',
        sku: 'D09876543',
        categories: [
            'Americas', 'Historical', 'Genre Fiction'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '8'
    },
    {
        title: 'Windswept',
        description: 'Quia enim incidunt adipisci est optio omnis quia. Saepe est magnam.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/33.jpg',
        price: '$59.95',
        author: 'Sarah Johnson',
        sku: 'E12309876',
        categories: [
            'Action & Adventure', 'Children\'s Books', 'Cultural'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '7'
    },
    {
        title: 'Echoes in Time',
        description: 'Libero dolorem quia ipsum harum. Repellat dolore quisquam ut sit facilis.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/34.jpg',
        price: '$34.99',
        author: 'Anna Davis',
        sku: 'F34561234',
        categories: [
            'Biographies', 'Classics', 'Education & Reference'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '4'
    },
    {
        title: 'Frozen Dreams',
        description: 'Et velit ipsa id dolorem. Dolor et accusantium eaque officia. Voluptatem non adipisci vel id.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/35.jpg',
        price: '$44.50',
        author: 'David Wilson',
        sku: 'G98761234',
        categories: [
            'Arts & Photography', 'Children\'s Books', 'Genre Fiction'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '5'
    },
    {
        title: 'Silent Whispers',
        description: 'Quasi aspernatur id voluptas. Ipsam quae velit aut enim exercitationem.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/36.jpg',
        price: '$72.30',
        author: 'Jessica Lee',
        sku: 'H65478901',
        categories: [
            'Americas', 'Historical', 'Classics'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '3'
    },
    {
        title: 'Lost in the Stars',
        description: 'Illo eum ut maxime. Nesciunt non vero occaecati perferendis consequatur.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/37.jpg',
        price: '$54.99',
        author: 'Ethan Harris',
        sku: 'I12340987',
        categories: [
            'Action & Adventure', 'Children\'s Books', 'Cultural'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '2'
    },
    {
        title: 'Eternal Night',
        description: 'Voluptas mollitia debitis qui. Est nisi aut harum molestias voluptatem.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/38.jpg',
        price: '$63.75',
        author: 'Olivia Martinez',
        sku: 'J87654321',
        categories: [
            'Biographies', 'Contemporary', 'Education & Reference'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '6'
    },
    {
        title: 'Moonlit Journey',
        description: 'Sit consequatur doloribus adipisci maiores. Qui aut ipsa et rem.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/39.jpg',
        price: '$49.00',
        author: 'Sophia Roberts',
        sku: 'K09871234',
        categories: [
            'Arts & Photography', 'Historical', 'Classics'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '4'
    },
    {
        title: 'Starlit Dreams',
        description: 'Sed eum vero nisi voluptatem. Commodi amet aut laborum.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/40.jpg',
        price: '$57.25',
        author: 'Liam Clark',
        sku: 'L87651234',
        categories: [
            'Children\'s Books', 'Genre Fiction', 'Education & Reference'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '7'
    },
    {
        title: 'Wonders of the Universe',
        description: 'Porro aut voluptas sint enim et. Dolorum corporis quia saepe.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/41.jpg',
        price: '$48.99',
        author: 'Mason Walker',
        sku: 'M12345678',
        categories: [
            'Americas', 'Historical', 'Contemporary'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '5'
    },
    {
        title: 'Galactic Adventures',
        description: 'Repudiandae enim sint repellendus est. Autem voluptas dolores eos non.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/42.jpg',
        price: '$55.00',
        author: 'Ava Scott',
        sku: 'N98761234',
        categories: [
            'Action & Adventure', 'Children\'s Books', 'Cultural'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '3'
    },
    {
        title: 'Mystic Waters',
        description: 'Quisquam ut eaque id nostrum. Reiciendis doloribus quo qui amet.',
        thumbnail: 'https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/43.jpg',
        price: '$67.50',
        author: 'Emma Hall',
        sku: 'O12340987',
        categories: [
            'Biographies', 'Contemporary', 'Genre Fiction'
        ],
        tags: [
            'Books', 'Fiction', 'Romance - Contemporary'
        ],
        availableAmount: '6'
    }
]