const express = require('express');

function videosApi(app) {
  const router = express.Router();

  app.use('/api/videos', router);

  router.get('/', (req, res) => {
    const { tags } = req.query;

    res.status(200).json({ data: tags, message: 'Videos listed' });
  });
  router.get('/:videoId', (req, res) => {
    const { videoId } = req.params;

    res.status(200).json({ data: videoId, message: 'video retrieved' });
  });
  router.post('/', (req, res) => {
    res.status(201).json({ data: {}, message: 'video created' });
  });
  router.put('/:videoId', (req, res) => {
    const { videoId } = req.params;

    res.status(200).json({ data: videoId, message: 'video pudated' });
  });
  router.delete('/:videoId', (req, res) => {
    const { videoId } = req.params;

    res.status(200).json({
      data: videoId,
      message: 'Video deleted',
    });
  });
}

module.exports = videosApi;
