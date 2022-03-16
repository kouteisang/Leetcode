public class No331 {
    public static void main(String[] args) {
        // 利用图的性质 in == out && 在未遍历完之前out应该始终大于in
        String preorder = "1,2,#,#,3,#,#";
        System.out.println(preorder.length() == 1 && preorder.charAt(0) == '#');
        String[] chs = preorder.split(",");
        int len = chs.length;
        int in = 0;
        int out = 0;
        for(int i = 0; i < len; i ++){
            if(i == 0){
                out += 2;
                continue;
            }
            if(chs[i].equals("#")){
                in += 1;
            }else{
                in ++;
                out += 2;
            }
            if(i != len - 1 && in >= out) System.out.println(false);
        }
        System.out.println(in == out);
    }
}
