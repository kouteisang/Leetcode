class Tire{
    boolean flag;
    String word;
    Tire[] children;

    public Tire(){
        this.flag = false;
        this.word = null;
        this.children = new Tire[26];
    }

}

public class No648 {
    public static void main(String[] args) {
        String[] dictionary = {"a", "aa", "aaa", "aaaa"};
        int len = dictionary.length;
        Tire root = new Tire();
        for(int i = 0; i < len; i ++){
            String word = dictionary[i];
            int wordLen = word.length();
            Tire cur = root;
            for(int j = 0; j < wordLen; j ++){
                if(cur.children[word.charAt(j)-'a'] == null){
                    cur.children[word.charAt(j)-'a'] = new Tire();
                }
                cur = cur.children[word.charAt(j)-'a'];
            }
            cur.flag = true;
            cur.word = word;
        }
        String sentence = "a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa";
        StringBuilder sb = new StringBuilder();
        String[] words = sentence.split(" ");
        for(String word : words){
            int wordLen = word.length();
            Tire cur = root;
            boolean flag = false;
            for(int i = 0; i < wordLen; i ++){
                if(cur.children[word.charAt(i)-'a'] != null){
                    cur = cur.children[word.charAt(i)-'a'];
                }else {
                    break;
                }
                if(cur.flag == true){
                    sb.append(cur.word);
                    sb.append(" ");
                    flag = true;
                    break;
                }
            }
            if(!flag){
                sb.append(word);
                sb.append(" ");
            }
        }
        sb.deleteCharAt(sb.length()-1);
        System.out.println(sb.toString());
    }
}
