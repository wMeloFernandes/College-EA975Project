package com.example.wmell.registerproject;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.wmell.registerproject.model.Register;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

/**
 * Created by wmell on 03/07/2019.
 */

class RegisterAdapter extends RecyclerView.Adapter<RegisterAdapter.RegisterViewHolder> {

    private Context mContext;
    private List<Register> mRegisters;

    public RegisterAdapter(Context context, List<Register> registers) {
        mContext = context;
        mRegisters = registers;
    }

    @NonNull
    @Override
    public RegisterAdapter.RegisterViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext()).inflate(R.layout.register_layout, parent, false);
        return new RegisterViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(@NonNull RegisterAdapter.RegisterViewHolder holder, int position) {
        Register register = mRegisters.get(position);
        if(position%2==0){
            holder.viewArrow.setImageResource(R.drawable.ic_arrow_upward_black_24dp);
        }else{
            holder.viewArrow.setImageResource(R.drawable.ic_arrow_downward_black_24dp);
        }

        DateFormat format = new SimpleDateFormat("EEEE MMMM d yyyy hh:mm:ss Z", Locale.US);
        Date date = null;
        try {
            date = format.parse(register.getTimestamp());
            SimpleDateFormat format2 = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
            holder.viewTime.setText(format2.format(date));
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    @Override
    public int getItemCount() {
        return mRegisters.size();
    }

    public static class RegisterViewHolder extends RecyclerView.ViewHolder {
        private ImageView viewArrow;
        private TextView viewTime;

        public RegisterViewHolder(View itemView) {
            super(itemView);

            viewArrow = itemView.findViewById(R.id.iv_arrow);
            viewTime = itemView.findViewById(R.id.tv_time);
        }
    }
}
