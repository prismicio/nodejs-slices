var prismic = require('../prismic-helpers');

// -- Display all documents

exports.index = prismic.route(function(req, res, ctx) {
  ctx.api.form('everything').set("page", req.param('page') || "1").ref(ctx.ref).submit(function(err, docs) {
    if (err) { prismic.onPrismicError(err, req, res); return; }
    res.render('index', {
      docs: docs
    });
  });
});


function toCamelcase(name) {
  return name.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase()})
};

function buildMixinName(sliceType, sliceLabel) {
  var fs = require('fs')
  var path = require('path')
  var labeledFileExists = fs.existsSync(path.resolve('views/slices/' + sliceType + '-' + sliceLabel + '.jade'))
  var mixinWithLabel = toCamelcase(sliceType + '-' + sliceLabel)
  var mixinName = (labeledFileExists ? mixinWithLabel : toCamelcase(sliceType))
  return mixinName;

}

function getPage(uid, ctx, res, callback) {
  ctx.api.forms('everything').ref(ctx.ref)
      .query('[[:d = at(my.page.uid,"' + uid + '")]]').submit(function(err, docs) {
        if (err) { prismic.onPrismicError(err, req, res); return; }
        if (docs.results && docs.results.length <= 0 ){
          res.status(404)
              .send('Not found');
        }
        else if (docs.results[0].uid == uid) {
          callback(doc.results[0])
        } else res.redirect(("/" + docs.results[0].uid))
      })
}

exports.page = prismic.route(function(req, res, ctx) {
  var id = req.params['uid']
  getPage(id, ctx, res, function(doc) {
    var slices =  doc.getSliceZone("page.body").value
    res.render('page', {
      doc: doc,
      slices: slices,
      helpers: {
        buildMixinName:buildMixinName
      }
    });
  })
});


// -- Preview documents from the Writing Room

exports.preview = prismic.route(function(req, res, ctx) {
  var token = req.query['token'];

  if (token) {
    ctx.api.previewSession(token, ctx.linkResolver, '/', function(err, url) {
      res.cookie(prismic.previewCookie, token, { maxAge: 30 * 60 * 1000, path: '/', httpOnly: false });
      res.redirect(301, url);
    });
  } else {
    res.send(400, "Missing token from querystring");
  }
});
