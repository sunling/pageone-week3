// TODO: 替换成你自己的 Supabase 项目 URL 和 anon key
const SUPABASE_URL = 'your supabase project url';
const SUPABASE_ANON_KEY = 'your supabase anon key';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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

// 添加新卡片的函数
async function addCard(title, content, author) {
  try {
    console.log('正在添加新卡片...', { title, content, author });
    const { data, error } = await supabaseClient
      .from('cards')
      .insert([{ title, content, author }])
      .select();

    if (error) {
      console.error('添加卡片失败:', error);
      alert('添加失败：' + error.message);
      return false;
    }

    console.log('卡片添加成功:', data);
    alert('卡片添加成功！');
    return true;
  } catch (error) {
    console.error('添加卡片时发生错误:', error);
    alert('添加失败：' + error.message);
    return false;
  }
}

// 处理表单提交
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('card-form');
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    const author = document.getElementById('author').value.trim();
    
    if (!title || !content || !author) {
      alert('请填写所有字段');
      return;
    }
    
    const success = await addCard(title, content, author);
    
    if (success) {
      // 清空表单
      form.reset();
      // 重新加载卡片列表
      loadCards();
    }
  });
});

loadCards();
