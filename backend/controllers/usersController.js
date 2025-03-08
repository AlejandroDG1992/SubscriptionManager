export const getUsers = async (supabase) => {
    const { data, error } = await supabase
      .from('users')
      .select('id, name, email, subscriptions (id, service, plan_name, price, date_init, date_end, date_billing, status)');
  
    if (error) {
      return { error: error.message };
    }
    return { data };
  };
  