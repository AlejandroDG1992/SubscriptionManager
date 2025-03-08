export const getSubscriptions = async (supabase, userId) => {
    const { data, error } = await supabase
      .from('subscriptions')
      .select('id, service, plan_name, price, date_init, date_end, date_billing, status')
      .eq('user_id', userId);
  
    if (error) {
      return { error: error.message };
    }
    return { data };
  };
  