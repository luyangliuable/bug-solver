/**
 * GET /
 * Test page.
 */
exports.index = (req, res) => {
    res.render('contact', {
        title: 'Test'
    });
};
