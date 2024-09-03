/* eslint-disable dot-notation */
/* eslint-disable no-invalid-this */
/* eslint-disable no-negated-condition */
/* eslint-disable complexity */
/*
 * Widget created by Shiromu Kara, (c) 2023.
 * https://shiromu.carrd.co/
 */

let totalMessages = 0;
let messagesLimit = 0;
let noname = 'show';
let ignored_nickColor = 'user';
let ignored_removeSelector,
  ignored_addition,
  ignored_customNickColor,
  channelName,
  provider,
  highlight,
  ignored_animate;
let animationIn = 'bounceIn';
let animationOut = 'bounceOut';
let hideAfter = 60;
let hideCommands = 'no';
let ignoredUsers = [];
let previousSender = '';
const ignored_emotes = [];

/**
 * @typedef {Object} PronounUser
 * @property {string} channel_id Twitch ID
 * @property {string} channel_login Twitch username
 * @property {string} pronoun_id Maps to the corresponding ID from the pronouns endpoint
 * @property {string?} alt_pronoun_id Same as above for secondary pronoun, optional (can be null)
 */

/**
 * @typedef {Object} PronounData
 * @property {string} name Maps to `pronoun_id` and `alt_pronoun_id` in the users API
 * @property {string} subject For "She/Her", this is "She"
 * @property {string} object For "She/Her", this is "Her"
 * @property {boolean} singular Only display the subject (for example "Any" instead of "Any/Any")
 */

window.addEventListener('onEventReceived', async function handleEventReceived(obj) {
  if (obj.detail.event.listener === 'widget-button') {
    if (obj.detail.event.field === 'testMessage') {
      const emulated = new CustomEvent('onEventReceived', {
        detail: {
          listener: 'message',
          event: {
            service: 'twitch',
            data: {
              time: Date.now(),
              tags: {
                'badge-info': '',
                badges: 'moderator/1,partner/1',
                color: '#5B99FF',
                'display-name': 'StreamElements',
                emotes: '25:46-50',
                flags: '',
                id: '43285909-412c-4eee-b80d-89f72ba53142',
                mod: '1',
                'room-id': '85827806',
                subscriber: '0',
                'tmi-sent-ts': '1579444549265',
                turbo: '0',
                'user-id': '100135110',
                'user-type': 'mod',
              },
              nick: channelName,
              userId: '100135110',
              displayName: channelName,
              displayColor: '#5B99FF',
              badges: [
                {
                  type: 'moderator',
                  version: '1',
                  url: 'https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/3',
                  description: 'Moderator',
                },
                {
                  type: 'partner',
                  version: '1',
                  url: 'https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/3',
                  description: 'Verified',
                },
              ],
              channel: channelName,
              text: 'Howdy! My name is Bill and I am here to serve Kappa',
              isAction: !1,
              emotes: [
                {
                  type: 'twitch',
                  name: 'Kappa',
                  id: '25',
                  gif: !1,
                  urls: {
                    1: 'https://static-cdn.jtvnw.net/emoticons/v1/25/1.0',
                    2: 'https://static-cdn.jtvnw.net/emoticons/v1/25/1.0',
                    4: 'https://static-cdn.jtvnw.net/emoticons/v1/25/3.0',
                  },
                  start: 46,
                  end: 50,
                },
              ],
              msgId: '43285909-412c-4eee-b80d-89f72ba53142',
            },
            renderedText:
              'Howdy! My name is Bill and I am here to serve <img src="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0" srcset="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 1x, https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 2x, https://static-cdn.jtvnw.net/emoticons/v1/25/3.0 4x" title="Kappa" class="emote">',
          },
        },
      });
      window.dispatchEvent(emulated);
    }
    return;
  }
  if (obj.detail.listener === 'delete-message') {
    const msgId = obj.detail.event.msgId;
    $(`.message-row[data-msgid=${msgId}]`).remove();
    return;
  } else if (obj.detail.listener === 'delete-messages') {
    const sender = obj.detail.event.userId;
    $(`.message-row[data-sender=${sender}]`).remove();
    return;
  }

  // inline events:
  // new followers
  if (obj.detail.listener === 'follower-latest') {
    const event = obj['detail']['event'];
    const eventUsername = `<span class="user-text-username">${event['name']}</span>`;
    const eventColor = '#FFFFFF';
    const eventSound = new Audio('{{followEventSound}}');
    const subtext = 'New Follower';
    const text = `${eventUsername} is now following. Thank you!`;
    const type = 'follow';
    addAlert(text, subtext, eventColor, eventSound, type);
    return;
  }

  // new raids
  if (obj.detail.listener === 'raid-latest') {
    const event = obj['detail']['event'];
    const eventUsername = `<span class="user-text-username">${event['name']}</span>`;
    const eventAmount = event['amount'];
    const eventColor = '#D71176';
    const eventSound = new Audio('{{raidEventSound}}');
    const subtext = 'Raid';
    const text = `${eventUsername} raided with a party of ${eventAmount}!`;
    const type = 'raid';
    addAlert(text, subtext, eventColor, eventSound, type);
    return;
  }

  // new cheers
  if (obj.detail.listener === 'cheer-latest') {
    const event = obj['detail']['event'];
    const eventUsername = `<span class="user-text-username">${event['name']}</span>`;
    const eventAmount = event['amount'];
    const eventColor = '#9B45FF';
    const eventSound = new Audio('{{supportEventSound}}');
    const subtext = 'Bits';
    const text = `${eventUsername} just cheered ${eventAmount} bits!`;
    const type = 'cheer';
    addAlert(text, subtext, eventColor, eventSound, type);
    return;
  }

  // new tipping
  if (obj.detail.listener === 'tip-latest') {
    const event = obj['detail']['event'];
    // let userCurrency = event['userCurrency']['symbol'];
    const userCurrency = '$';
    const eventUsername = `<span class="user-text-username">${event['name']}</span>`;
    const eventAmount = userCurrency + event['amount'];
    const eventColor = '#00FFCD';
    const eventSound = new Audio('{{supportEventSound}}');
    const subtext = 'Donation';
    const text = `${eventUsername} donated ${eventAmount}!`;
    const type = 'donation';
    addAlert(text, subtext, eventColor, eventSound, type);
    return;
  }

  // new subs
  if (obj.detail.listener === 'subscriber-latest') {
    const event = obj['detail']['event'];
    let eventUsername = `<span class="user-text-username">${event['name']}</span>`;
    const eventColor = '#F49B0B';
    const eventSound = new Audio('{{supportEventSound}}');
    const type = 'sub';

    // lay out the groundwork for sub types
    // these should have been 'true' or 'false'
    const isCommunityGift = event['isCommunityGift'];
    const isGifted = event['gifted'];
    const subBomb = event['bulkGifted'];

    // classifications
    // don't display anything if it's "continued sub"
    if (isCommunityGift) {
      return;
    }

    // sub bombs
    if (subBomb) {
      const subtext = 'Gift Sub';
      const eventAmountCount = event['amount'] > 1 ? 'subs' : 'sub';
      const eventAmount = event['amount'] + eventAmountCount;
      const text = `${eventUsername} just gifted ${eventAmount} to the community!`;
      addAlert(text, subtext, eventColor, eventSound, type);

      // direct gifted sub
    } else if (isGifted) {
      const subtext = 'Gift Sub';
      eventUsername = event['name'];
      const text = `<span class="user-text-username">${event['sender']}</span> just gifted a sub to ${eventUsername}!`;
      addAlert(text, subtext, eventColor, eventSound, type);

      // resub
    } else if (event['amount'] > 1) {
      const subtext = event['tier'] == 'prime' ? 'Prime Resub' : 'Resub';
      // let subtext = 'Resub';
      const eventAmount = `${event['amount']} months`;
      const text = `${eventUsername} just resubbed for ${eventAmount}!`;
      addAlert(text, subtext, eventColor, eventSound, type);

      // first sub
    } else if (event['amount'] == 1) {
      const subtext = event['tier'] == 'prime' ? 'Prime Sub' : 'Subscriber';
      const text = `${eventUsername} is now subscribed!`;
      addAlert(text, subtext, eventColor, eventSound, type);
    }
    return;
  }

  if (obj.detail.listener !== 'message') return;
  const data = obj.detail.event.data;
  if (data.text.startsWith('!') && hideCommands === 'yes') return;
  if (ignoredUsers.indexOf(data.nick) !== -1) return;
  const message = attachEmotes(data);
  let badges = '';
  let badge;
  if (provider === 'mixer') {
    data.badges.push({ url: data.avatar });
  }
  for (let i = 0; i < data.badges.length; i++) {
    badge = data.badges[i];
    badges += `<img alt="" src="${badge.url}" class="badge"> `;
  }

  /** @type {Record<string, PronounData>} */
  const pronounList = await fetch('https://pronouns.alejo.io/v1/pronouns').then(response =>
    response.json(),
  );

  /** @type {PronounUser} */
  const pronounUser = await fetch(
    `https://pronouns.alejo.io/v1/users/${obj.detail.event.data.displayName.toLowerCase()}`,
  ).then(response => response.json());

  let pronounDisplay = '';
  console.log('before check');
  console.log(pronounDisplay);
  if (typeof pronounUser !== 'undefined') {
    if (pronounUser.pronoun_id in pronounList) {
      const pronoun = pronounList[pronounUser.pronoun_id];
      const pronounText = pronoun.singular
        ? `${pronoun.subject}`
        : `${pronoun.subject}/${pronoun.object}`;
      pronounDisplay += `<span class="pronoun">${pronounText}</span>`;
    }

    if (pronounUser.alt_pronoun_id && pronounUser.alt_pronoun_id in pronounList) {
      const altPronoun = pronounList[pronounUser.alt_pronoun_id];
      const altPronounText = altPronoun.singular
        ? `${altPronoun.subject}`
        : `${altPronoun.subject}/${altPronoun.object}`;
      pronounDisplay += `<span class="pronoun">${altPronounText}</span>`;
    }
  }
  console.log('after check');
  console.log(pronounDisplay);

  let username = data.displayName;
  const nickname = data.displayName;
  const color = data.displayColor !== '' ? data.displayColor : `#${md5(username).substr(26)}`;
  username = `${pronounDisplay}<span style="color:${color}">${username}</span>`;

  highlight = obj.detail.event.data.tags['msg-id'] === 'highlighted-message';

  addMessage({
    nickname,
    username,
    badges,
    message,
    isAction: data.isAction,
    userId: data.userId,
    msgId: data.msgId,
  });
});

window.addEventListener('onWidgetLoad', function handleWidgetLoad(obj) {
  const fieldData = obj.detail.fieldData;
  animationIn = fieldData.animationIn;
  animationOut = fieldData.animationOut;
  hideAfter = fieldData.hideAfter;
  messagesLimit = fieldData.messagesLimit;
  ignored_nickColor = fieldData.nickColor;
  ignored_customNickColor = fieldData.customNickColor;
  hideCommands = fieldData.hideCommands;
  channelName = obj.detail.channel.username;
  ignored_animate = fieldData.messageAlign;
  noname = fieldData.noname;
  fetch(`https://api.streamelements.com/kappa/v2/channels/${obj.detail.channel.id}/`)
    .then(response => response.json())
    .then(profile => {
      provider = profile.provider;
    });
  ignoredUsers = fieldData.ignoredUsers.toLowerCase().replace(' ', '').split(',');
});

function attachEmotes(message) {
  const text = html_encode(message.text);
  const data = message.emotes;
  return text.replace(/([^\s]*)/gi, (m, key) => {
    const result = data.filter(emote => {
      return emote.name === key;
    });
    if (typeof result[0] !== 'undefined') {
      const url = result[0]['urls'][1];
      return `<img alt="" src="${url}" class="emote"/>`;
    } else return key;
  });
}

function html_encode(e) {
  return e.replace(/[<>"^]/g, htmlCode => {
    return `&#${htmlCode.charCodeAt(0)};`;
  });
}

function addMessage({
  nickname: _nickname,
  username,
  badges,
  message,
  isAction,
  uid,
  msgId,
  avatar: _avatar,
}) {
  if (noname === 'show') {
    if (previousSender !== username) {
      previousSender = username;
    } else {
      username = '';
      badges = '';
    }
  }

  totalMessages += 1;
  let actionClass = '';
  if (isAction) {
    actionClass = 'action';
  }
  const element = $.parseHTML(`
    <div data-sender="${uid}" data-msgid="${msgId}" class="message-row animated" id="msg-${totalMessages}">
        <div class="user-box ${actionClass}">${badges}${username}</div>
        <div class="user-message ${actionClass}">${message}</div>
    </div>`);

  if (hideAfter !== 999) {
    $('.main-container').prepend(element);
    if (highlight) {
      const highlightmsg = document.querySelector(`#msg-${totalMessages}`);
      highlightmsg.classList.add('highlight');
    }
    gsap.fromTo(
      `#msg-${totalMessages}`,
      0.5,
      { width: 0 },
      { ease: Power1.easeOut, width: 'auto' },
    );

    $('.main-container .message-row')
      .prepend(element)
      .delay(hideAfter * 1000)
      .queue(() => {
        $(this)
          .removeClass(animationIn)
          .addClass(animationOut)
          .delay(1000)
          .queue(() => {
            $(this).remove();
          })
          .dequeue();
      });
  } else {
    $('.main-container').prepend(element);
    if (highlight) {
      const highlightmsg = document.querySelector(`#msg-${totalMessages}`);
      highlightmsg.classList.add('highlight');
    }
    gsap.fromTo(
      `#msg-${totalMessages}`,
      0.5,
      { width: 0 },
      { ease: Power1.easeOut, width: 'auto' },
    );
  }

  document.querySelectorAll('.main-container .message-row').forEach((el, i) => {
    if (i >= { messagesLimit }) {
      gsap
        .timeline()
        .to(el, { opacity: 0 })
        .add(() => {
          el.remove();
        });
    }
  });
}

function addAlert(text, subtext, eventColor, eventSound, type) {
  totalMessages += 1;
  const element = $.parseHTML(`
    <div class="alert-row message-row animated ${type}" id="msg-${totalMessages}">
        <span class="user-alert" style="background-color: ${eventColor};">${subtext}</span>
        <span class="user-text" style="background-color: ${eventColor}40;">${text}</span>
    </div>`);

  if (hideAfter !== 999) {
    $('.main-container').prepend(element);
    gsap.fromTo(
      `#msg-${totalMessages}`,
      0.5,
      { width: 0 },
      { ease: Power1.easeOut, width: 'auto' },
    );

    $('.main-container .message-row')
      .prepend(element)
      .delay(hideAfter * 1000)
      .queue(() => {
        $(this)
          .removeClass(animationIn)
          .addClass(animationOut)
          .delay(1000)
          .queue(() => {
            $(this).remove();
          })
          .dequeue();
      });
  } else {
    $('.main-container').prepend(element);
    if (highlight) {
      const highlightmsg = document.querySelector(`#msg-${totalMessages}`);
      highlightmsg.classList.add('highlight');
    }
    gsap.fromTo(
      `#msg-${totalMessages}`,
      0.5,
      { width: 0 },
      { ease: Power1.easeOut, width: 'auto' },
    );
  }

  document.querySelectorAll('.main-container .message-row').forEach((el, i) => {
    if (i >= { messagesLimit }) {
      gsap
        .timeline()
        .to(el, { opacity: 0 })
        .add(() => {
          el.remove();
        });
    }
  });
  playEventSound(eventSound);
}

function playEventSound(sound) {
  sound.volume = '{eventVolume}';
  sound.play();
  if (sound.currentTime == sound.duration) {
    sound.pause();
    sound.currentTime = 0;
  }
}
