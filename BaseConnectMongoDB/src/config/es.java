//Hàm tạo và sử dụng hai lớp số Phức Complex gồm hai thành phần thực và ảo
package config;
public class es {
    public static void main(String[] args) {
        Complex c1 = new Complex(1, 2);
        Complex c2 = new Complex(3, 4);
        Complex c3 = c1.add(c2);
        System.out.println(c3);
    }
}
class Complex {
    private double real;
    private double image;

    public Complex(double real, double image) {
        this.real = real;
        this.image = image;
    }
    //mul
    public Complex mul(Complex c) {
        double real = this.real * c.real - this.image * c.image;
        double image = this.real * c.image + this.image * c.real;
        return new Complex(real, image);
    }
    //div
    public Complex div(Complex complex2) {
        double real = (this.real * complex2.real + this.image * complex2.image) / (complex2.real * complex2.real + complex2.image * complex2.image);
        double image = (this.image * complex2.real - this.real * complex2.image) / (complex2.real * complex2.real + complex2.image * complex2.image);
        return new Complex(real, image);
    }
}