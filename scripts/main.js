// TODO: 替换成你自己的 Supabase 项目 URL 和 anon key
const SUPABASE_URL = 'https://aesfvgxzupslftfszkym.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlc2Z2Z3h6dXBzbGZ0ZnN6a3ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1MzA5ODMsImV4cCI6MjA2NjEwNjk4M30.0q8lqn96TQJWytRibiSmhRPE0smcrNLccR3eHgdUHvY';

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function loadCards() {
  const { data, error } = await supabaseClient.from('cards').select('*').order('id', { ascending: false });

  const cardList = document.getElementById('card-list');
  cardList.innerHTML = '';

  if (error) {
    cardList.textContent = '加载失败：' + error.message;
    return;
  }

  if (data.length === 0) {
    cardList.textContent = '目前没有任何卡片哦～';
    return;
  }

  data.forEach(card => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `<h3>${card.title}</h3><p>${card.content}</p><small>by ${card.author}</small>`;
    cardList.appendChild(div);
  });
}

loadCards();
