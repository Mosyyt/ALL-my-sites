const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const path = require('path'); // Add this line

const app = express();
const port = 2110;

const IGDB_CLIENT_ID = 'inokh47k7ph5xyh26p2x3ic3p8pmyo';
const IGDB_TOKEN = 'nsfsmgt5kdmyl72eo08t7mbedz0dpe';
// Middleware to serve static files
app.use(express.static('public'));

// Function to format game names to URL structure
function formatGameNameToUrl(gameName) {
    return gameName.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-tenoke$/, '') // Remove trailing TENOKE for consistency
        .replace(/-p2p$/, ''); // Remove trailing P2P for consistency
}

// Endpoint to fetch image proxy
app.get('/fetch-image', async (req, res) => {
    const imageUrl = req.query.url;
    if (!imageUrl) {
        return res.status(400).send('Image URL is required');
    }

    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const contentType = response.headers['content-type'];
        res.set('Content-Type', contentType);
        res.send(response.data);
    } catch (error) {
        console.error(`Failed to fetch image: ${error.message}`);
        res.status(500).send('Failed to fetch image');
    }
});

// Endpoint to scrape main games
app.get('/scrape', async (req, res) => {
    try {
        const response = await axios.get('https://www.skidrowreloaded.com/');
        const html = response.data;
        const $ = cheerio.load(html);

        const games = [];
        $('.post').each((index, element) => {
            const title = $(element).find('h2 a').text();
            let banner = $(element).find('img').attr('src');
            if (title && banner) {
                // Modify banner URL to go through the proxy
                banner = `/fetch-image?url=${encodeURIComponent(banner)}`;
                const gameUrl = `/info.html?name=${encodeURIComponent(title)}`;
                games.push({ title, banner, gameUrl });
            }
        });

        res.json({ games });
    } catch (error) {
        console.error(`Error occurred while scraping: ${error.message}`);
        res.status(500).send('Error occurred while scraping');
    }
});

// Endpoint to scrape detailed game information
app.get('/scrape-game', async (req, res) => {
    const gameName = req.query.name;
    if (!gameName) {
        return res.status(400).json({ error: 'Game name is required' });
    }

    const formattedGameName = formatGameNameToUrl(gameName);
    const gameUrl = `https://www.skidrowreloaded.com/${formattedGameName}-tenoke/`;

    try {
        console.log(`Fetching game details from URL: ${gameUrl}`);
        const response = await axios.get(gameUrl);
        const html = response.data;
        const $ = cheerio.load(html);

        const title = $('h2').first().text();
        const banner = $('img.aligncenter').first().attr('src');
        const description = $('#tabs-376468-0-0 p').first().text();
        const downloadLinks = [];

        $('.codecolorer-container.text.twitlight a').each((index, element) => {
            downloadLinks.push($(element).attr('href'));
        });

        res.json({ title, banner, description, downloadLinks });
    } catch (error) {
        console.error(`Error occurred while scraping game details: ${error.message}`);
        if (error.response && error.response.status === 404) {
            res.status(404).json({ error: 'Game not found' });
        } else {
            res.status(500).json({ error: 'Error occurred while scraping game details' });
        }
    }
});

// Endpoint to scrape PC repacks
app.get('/scrape-pc-repacks', async (req, res) => {
    try {
        const response = await axios.get('https://www.skidrowreloaded.com/category/pc-repack/');
        const html = response.data;
        const $ = cheerio.load(html);

        const repacks = [];
        $('.post').each((index, element) => {
            const title = $(element).find('h2 a').text();
            let banner = $(element).find('img').attr('src');
            if (title && banner) {
                // Modify banner URL to go through the proxy
                banner = `/fetch-image?url=${encodeURIComponent(banner)}`;
                const gameUrl = `/info.html?name=${encodeURIComponent(title)}`;
                repacks.push({ title, banner, gameUrl });
            }
        });

        res.json({ repacks });
    } catch (error) {
        console.error(`Error occurred while scraping PC repacks: ${error.message}`);
        res.status(500).send('Error occurred while scraping PC repacks');
    }
});

app.get('/scrape-repack-details', async (req, res) => {
    const gameName = req.query.name;
    if (!gameName) {
        return res.status(400).json({ error: 'Game name is required' });
    }

    const formattedGameName = formatGameNameToUrl(gameName);
    const gameUrl = `https://www.skidrowreloaded.com/${formattedGameName}/`;

    try {
        console.log(`Fetching game details from URL: ${gameUrl}`);
        const response = await axios.get(gameUrl);
        const html = response.data;
        const $ = cheerio.load(html);

        const title = $('h2').first().text();
        let banner = $('.aligncenter').first().attr('src');
        if (banner) {
            banner = `/fetch-image?url=${encodeURIComponent(banner)}`;
        }
        const content = $('.wordpress-post-tabs').html();

        res.json({ title, banner, content });
    } catch (error) {
        console.error(`Error occurred while scraping game details: ${error.message}`);
        if (error.response && error.response.status === 404) {
            res.status(404).json({ error: 'Game not found' });
        } else {
            res.status(500).json({ error: 'Error occurred while scraping game details' });
        }
    }
});



// Endpoint to fetch image proxy
app.get('/fetch-image', async (req, res) => {
    const imageUrl = req.query.url;
    if (!imageUrl) {
        return res.status(400).send('Image URL is required');
    }

    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const contentType = response.headers['content-type'];
        res.set('Content-Type', contentType);
        res.send(response.data);
    } catch (error) {
        console.error(`Failed to fetch image: ${error.message}`);
        res.status(500).send('Failed to fetch image');
    }
});



// New route for ROMs main page
app.get('/roms', async (req, res) => {
    try {
        const response = await axios.get('https://vimm.net/vault');
        const $ = cheerio.load(response.data);
        const consoles = [];

        $('table.rounded').each((i, table) => {
            const category = $(table).find('caption').text();
            $(table).find('tbody tr').each((j, row) => {
                const console = $(row).find('td:first-child a').text();
                const url = $(row).find('td:first-child a').attr('href');
                const year = $(row).find('td.yearColumn span').attr('title');
                consoles.push({ category, console, url, year });
            });
        });

        res.json({ consoles });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

// New route for specific console games
app.get('/roms/:console', async (req, res) => {
    const { console } = req.params;
    const baseUrl = `https://vimm.net/vault/${console}`;

    try {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        let games = [];

        for (const letter of letters) {
            const url = `${baseUrl}/${letter}`;
            const response = await axios.get(url);
            const $ = cheerio.load(response.data);

            $('table.rounded tbody tr').each((i, row) => {
                const title = $(row).find('td:first-child a').text();
                const gameUrl = $(row).find('td:first-child a').attr('href');
                const region = $(row).find('td:nth-child(2) img').attr('title');
                const version = $(row).find('td:nth-child(3)').text().trim();
                const languages = $(row).find('td:nth-child(4)').text().trim();
                const rating = $(row).find('td:nth-child(5) a').text();

                // Skip games with undefined or empty titles
                if (title && title !== 'undefined' && region && region !== 'undefined') {
                    games.push({ title, gameUrl, region, version, languages, rating });
                }
            });
        }

        games = games.sort((a, b) => a.title.localeCompare(b.title));
        res.json({ games });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/consoleinfo', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/consoleinfo.html'));
});

app.get('/rom/:id', async (req, res) => {
    const { id } = req.params;
    const gameUrl = `https://vimm.net/vault/${id}`;

    try {
        const response = await axios.get(gameUrl);
        const $ = cheerio.load(response.data);

        // Extract relevant data from the page
        const gameData = {
            system: $('#vaultMenu a.selected').text(),
            systemLink: $('#vaultMenu a.selected').attr('href'),
            gameTitle: $('h2 .sectionTitle').text(),
            region: $('td img.flag').attr('title'),
            players: $('td:contains("Players")').next().text().trim(),
            year: $('td:contains("Year")').next().text().trim(),
            publisher: $('td:contains("Publisher")').next().text().trim(),
            serial: $('td:contains("Serial")').next().text().trim(),
            graphics: $('td:contains("Graphics")').next().text().trim(),
            sound: $('td:contains("Sound")').next().text().trim(),
            gameplay: $('td:contains("Gameplay")').next().text().trim(),
            overall: $('td:contains("Overall")').next().text().trim().split(" ")[0],
            ratingVotes: $('td:contains("Overall")').next().text().trim().split(" ")[1],
            crc: $('td:contains("CRC")').next().text().trim(),
            md5: $('td:contains("MD5")').next().text().trim(),
            sha1: $('td:contains("SHA1")').next().text().trim(),
            verifiedDate: $('td:contains("Verified")').next().text().trim(),
            downloadSize: $('td:contains("Size")').next().text().trim(),
            screenshotSrc: $('#screenShot').css('background-image').replace('url(', '').replace(')', '').replace(/\"/gi, ""),
            boxArtSrc: $('img[alt="Box Art"]').attr('src'),
            gameId: id
        };

        res.json(gameData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.get('/romdownload/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/romdownload.html'));
});

// Endpoint to serve index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/casino.html');
});

// Endpoint to serve info.html
app.get('/info.html', (req, res) => {
    res.sendFile(__dirname + '/public/info.html');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
