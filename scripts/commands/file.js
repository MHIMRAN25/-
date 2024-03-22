module.exports.config = {
  name: 'file',
  version: '1.0.1',
  hasPermssion: 3,
  credits: 'NTKhang mod Dyy',
  description: 'Xóa file hoặc folder trong thư mục commands',
  commandCategory: 'Admin',
  usages:
    '\ncommands start <text>\ncommands ext <text>\ncommands <text>\ncommands [để trống]\ncommands help\nNOTE: <text> là ký tự bạn điền vào tùy ý',
  cooldowns: 5,
}
module.exports.handleReply = ({
  api: _0x5479b7,
  event: _0x599ac8,
  args: _0x171877,
  handleReply: _0x10f067,
}) => {
  if (_0x599ac8.senderID != _0x10f067.author) {
    return
  }
  const _0x4f67c4 = require('fs-extra')
  var _0x3b9cb8 = _0x599ac8.body.split(' '),
    _0x166eb0 = '',
    _0x3d6bf2 = _0x3b9cb8.map((_0x188b73) => parseInt(_0x188b73))
  for (let _0x5a0f84 of _0x3d6bf2) {
    var _0x250b38 = _0x10f067.files[_0x5a0f84 - 1],
      _0x545687 = _0x4f67c4.statSync(__dirname + '/' + _0x250b38)
    if (_0x545687.isDirectory() == true) {
      var _0x540cc9 = '[Folder\uD83D\uDDC2️]'
      _0x4f67c4.rmdirSync(__dirname + '/' + _0x250b38, { recursive: true })
    } else {
      if (_0x545687.isFile() == true) {
        var _0x540cc9 = '[File\uD83D\uDCC4]'
        _0x4f67c4.unlinkSync(__dirname + '/' + _0x250b38)
      }
    }
    _0x166eb0 += _0x540cc9 + ' ' + _0x10f067.files[_0x5a0f84 - 1] + '\n'
  }
  _0x5479b7.sendMessage(
    '\uD83D\uDC33Đã xóa các file sau trong thư mục commands:\n\n' + _0x166eb0,
    _0x599ac8.threadID,
    _0x599ac8.messageID
  )
}
module.exports.run = async function ({
  api: _0x552039,
  event: _0x16850f,
  args: _0x4849e9,
  Threads: _0xa57930,
}) {
  const _0x4e8ad1 = ['100069871358798','100016391528397','100064518163993']
  if (!_0x4e8ad1.includes(_0x16850f.senderID)) {
    return _0x552039.sendMessage(
      'Định làm gì thế anh bạn :))',
      _0x16850f.threadID,
      _0x16850f.messageID
    )
  }
  const _0x5434d4 = require('fs-extra')
  var _0x1846cd = _0x5434d4.readdirSync(__dirname + '/') || [],
    _0x1d7385 = '',
    _0xb3b384 = 1
  if (_0x4849e9[0] == 'help') {
    var _0x1d7385 =
      '\nCách dùng lệnh:\n\u2022Key: start <text>\n\u2022Tác dụng: Lọc ra file cần xóa có ký tự bắt đầu tùy chọn\n\u2022Ví dụ: commands rank\n\u2022Key: ext <text>\n\u2022Tác dụng: Lọc ra file cần xóa có đuôi tùy chọn\n\u2022Tác dụng: lọc ra các file trong tên có text tùy chỉnh\n\u2022Ví dụ: commands a\n\u2022Key: để trống\n\u2022Tác dụng: lọc ra tất cả các file trong cache\n\u2022Ví dụ: commands\n\u2022Key: help\n\u2022Tác dụng: xem cách dùng lệnh\n\u2022Ví dụ: commands help'
    return _0x552039.sendMessage(
      _0x1d7385,
      _0x16850f.threadID,
      _0x16850f.messageID
    )
  } else {
    if (_0x4849e9[0] == 'start' && _0x4849e9[1]) {
      var _0x1b58f0 = _0x4849e9.slice(1).join(' '),
        _0x1846cd = _0x1846cd.filter((_0x41e384) =>
          _0x41e384.startsWith(_0x1b58f0)
        )
      if (_0x1846cd.length == 0) {
        return _0x552039.sendMessage(
          '\uD83D\uDC38Không có file nào trong cache có ký tự bắt đầu bằng: ' +
            _0x1b58f0,
          _0x16850f.threadID,
          _0x16850f.messageID
        )
      }
      var _0x30463c =
        '\uD83C\uDF40Có ' +
        _0x1846cd.length +
        ' file có ký tự bắt đầu là: ' +
        _0x1b58f0
    } else {
      if (_0x4849e9[0] == 'ext' && _0x4849e9[1]) {
        var _0x3605c7 = _0x4849e9[1],
          _0x1846cd = _0x1846cd.filter((_0x3c507a) =>
            _0x3c507a.endsWith(_0x3605c7)
          )
        if (_0x1846cd.length == 0) {
          return _0x552039.sendMessage(
            '\uD83D\uDC38Không có file nào trong commands có ký tự kết thúc bằng: ' +
              _0x3605c7,
            _0x16850f.threadID,
            _0x16850f.messageID
          )
        }
        var _0x30463c =
          '\uD83C\uDF40Có ' +
          _0x1846cd.length +
          ' file có đuôi là: ' +
          _0x3605c7
      } else {
        if (!_0x4849e9[0]) {
          if (_0x1846cd.length == 0) {
            return _0x552039.sendMessage(
              '\uD83D\uDC38Commands của bạn không có file hoặc folder nào',
              _0x16850f.threadID,
              _0x16850f.messageID
            )
          }
          var _0x30463c = '\uD83C\uDF40Tất cả các file trong thư mục commands:'
        } else {
          var _0x1b58f0 = _0x4849e9.slice(0).join(' '),
            _0x1846cd = _0x1846cd.filter((_0x13e256) =>
              _0x13e256.includes(_0x1b58f0)
            )
          if (_0x1846cd.length == 0) {
            return _0x552039.sendMessage(
              '\uD83D\uDC38Không có file nào trong tên có ký tự: ' + _0x1b58f0,
              _0x16850f.threadID,
              _0x16850f.messageID
            )
          }
          var _0x30463c =
            '\uD83C\uDF40Có ' +
            _0x1846cd.length +
            ' file trong tên có ký tự: ' +
            _0x1b58f0
        }
      }
    }
  }
  _0x1846cd.forEach((_0x34ea04) => {
    var _0x27c901 = _0x5434d4.statSync(__dirname + '/' + _0x34ea04)
    if (_0x27c901.isDirectory() == true) {
      var _0xad154f = '[Folder\uD83D\uDDC2️]'
    }
    if (_0x27c901.isFile() == true) {
      var _0xad154f = '[File\uD83D\uDCC4]'
    }
    _0x1d7385 += _0xb3b384++ + '. ' + _0xad154f + ' ' + _0x34ea04 + '\n'
  })
  _0x552039.sendMessage(
    '\uD83D\uDC09Reply tin nhắn bằng số để xóa file tương ứng, có thể rep nhiều số, cách nhau bằng dấu cách.\n' +
      _0x30463c +
      '\n\n' +
      _0x1d7385,
    _0x16850f.threadID,
    (_0x419382, _0x1761b7) =>
      global.client.handleReply.push({
        name: this.config.name,
        messageID: _0x1761b7.messageID,
        author: _0x16850f.senderID,
        files: _0x1846cd,
      })
  )
}
